package main

import (
	"fmt"
	"log"
	"math"
	"os"
	"strconv"
	"strings"
)

func main() {
	file, err := os.ReadFile("input.txt")

	if err != nil {
		log.Printf("Error reading file: %v", err)
		os.Exit(1)
	}

	direction, x, y := "N", 0, 0

	for _, instruction := range strings.Split(string(file), ", ") {
		turn := string(instruction[0])
		stepsStr := instruction[1:]
		steps, err := strconv.Atoi(stepsStr)

		if err != nil {
			log.Printf("Error converting string to int: %v", err)
			os.Exit(1)
		}

		direction = updateCoordinates(direction, turn, steps, &x, &y)
	}

	distance := math.Abs(float64(x)) + math.Abs(float64(y))

	fmt.Println(distance)
}

func updateCoordinates(direction string, turn string, steps int, x *int, y *int) string {
	switch direction {
	case "N":
		if turn == "R" {
			*x += steps
			direction = "E"
		} else {
			*x -= steps
			direction = "W"
		}
	case "S":
		if turn == "R" {
			*x -= steps
			direction = "W"
		} else {
			*x += steps
			direction = "E"
		}
	case "W":
		if turn == "R" {
			*y += steps
			direction = "N"
		} else {
			*y -= steps
			direction = "S"
		}
	case "E":
		if turn == "R" {
			*y -= steps
			direction = "S"
		} else {
			*y += steps
			direction = "N"
		}
	}

	return direction
}
