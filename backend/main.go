package main

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	r := gin.Default()
	r.Use(utils.CORSMiddleware())

	routes.RegisterRoutes(r)

	r.Run(":8080")
}
