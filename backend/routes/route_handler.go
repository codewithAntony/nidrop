package routes

import (
	"backend/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

type RouteRequest struct {
	Start	string	`json:"start"`
	End		string	`json:"end"`
}


func RegisterRoutes(r *gin.Engine) {
	r.Post("/route", handleRoute)
}

func handleRoute(c *gin.Context) {
	var req RouteRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	startCoords, err := services.Geocode(req.Start)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to geocode start"})
		return
	}

	endCoords, err := services.Geocode(req.End)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to geocode destination"})
		return
	}

	routeData, err := services.Geocode(startCoords, endCoords)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get route"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"startCoords": startCoords,
		"endCoords":   endCoords,
		"route":       routeData["coordinates"],
		"distance":    routeData["distance"],
		"duration":    routeData["duration"],
	})
}