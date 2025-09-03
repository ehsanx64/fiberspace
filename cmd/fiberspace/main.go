package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	application "fiberspace/internal"
)

func main() {
	app := fiber.New()

	app.Use(cors.New())

	app.Get("/message", func(c *fiber.Ctx) error {
		return c.SendString(application.GetMessage())
	})

	app.Static("/", "./frontend/dist/")

	log.Fatal(app.Listen(":3000"))
}
