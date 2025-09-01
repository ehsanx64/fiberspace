package main

import (
	"log"

	"github.com/gofiber/fiber/v2"

	application "fiberspace/internal"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString(application.GetMessage())
	})

	log.Fatal(app.Listen(":3000"))
}
