package services

import (
	"encoding/json"
	"fmt"

	"github.com/go-resty/resty/v2"
)

type Coordinates struct {
	Lat	float64 `json:"lat"`
	Lon float64 `json:"lon"`
}

type GeoResult []struct {
	Lat	float64 `json:"lat"`
	Lon float64 `json:"lon"`
}

func Geocode(place string) (Coordinates, error) {
	client := resty.New()
	url := fmt.Sprintf("https://nominatim.openstreetmap.org/search?q=%s&format=json&limit=1", place)

	resp, err := client.R().
		SetHeader("User-Agent", "route-app").
		Get(url)
	if err != nil {
		return Coordinates{}, err
	}

	var results GeoResult
	if err := json.Unmarshal(resp.Body(), &results); err != nil || len(results) == 0 {
		return Coordinates{}, fmt.Errorf("no results found for %s", place)
	}

	return Coordinates{
		Lat: parseFloat(results[0].Lat),
		Lon: parseFloat(results[0].Lon),
	}, nil
}