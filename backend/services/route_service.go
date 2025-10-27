package services

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/go-resty/resty/v2"
)

func GetRoute(start, end Coordinates) (map[string]interface{}, error) {
	client := resty.New()
	apiKey := os.Getenv("OPENROUTE_API_KEY")

	url := fmt.Sprintf("https://api.openrouteservice.org/v2/directions/driving-car?api_key=%s", apiKey)
	body := map[string]interface{}{
		"coordinates": [][]float64{
			{start.Lon, start.Lat},
			{end.Lon, end.Lat},
		},
	}

	resp, err := client.R().
		SetHeader("Content-Type", "application/json").
		SetBody(body).
		Post(url)
	if err != nil {
		return nil, err
	}

	var data map[string]interface{}
	json.Unmarshal(resp.Body(), &data)

	features := data["features"].([]interface{})[0].(map[string]interface{})
	summary := features["properties"].(map[string]interface{})["summary"].(map[string]interface{})
	geometry := features["geometry"].(map[string]interface{})

	return map[string]interface{}{
		"coordinates": geometry["coordinates"],
		"distance":    summary["distance"],
		"duration":	   summary["duration"],
	}, nil
}