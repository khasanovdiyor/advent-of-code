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
	instructions, err := os.ReadFile("input.txt")

	if err != nil {
		log.Printf("Error reading file: %v", err)
		os.Exit(1)
	}

	walk(instructions)

}

func walk(instructions []byte) {
	part2 := true
	direction, x, y := "N", 0, 0
	seenPoints := make(map[string]bool)
	seenPoints[fmt.Sprintf("%d,%d", x, y)] = true

	for _, instruction := range strings.Split(string(instructions), ", ") {
		turn := string(instruction[0])
		stepsStr := instruction[1:]
		steps, err := strconv.Atoi(stepsStr)

		if err != nil {
			log.Printf("Error converting string to int: %v", err)
			os.Exit(1)
		}

		direction = updateDirection(direction, turn)

		for i := 0; i < steps; i++ {
			move(direction, &x, &y)
			key := fmt.Sprintf("%d,%d", x, y)
			if part2 && seenPoints[key] {
				distance := math.Abs(float64(x)) + math.Abs(float64(y))
				fmt.Println("part2:", distance)
				part2 = false
			}
			seenPoints[key] = true
		}
	}

	distance := math.Abs(float64(x)) + math.Abs(float64(y))
	fmt.Println("part1:", distance)

}

func updateDirection(direction, turn string) string {
	switch direction {
	case "N":
		if turn == "R" {
			direction = "E"
		} else {
			direction = "W"
		}
	case "S":
		if turn == "R" {
			direction = "W"
		} else {
			direction = "E"
		}
	case "W":
		if turn == "R" {
			direction = "N"
		} else {
			direction = "S"
		}
	case "E":
		if turn == "R" {
			direction = "S"
		} else {

			direction = "N"
		}
	}

	return direction
}

func move(direction string, x, y *int) {
	switch direction {
	case "N":
		*y += 1
	case "E":
		*x += 1
	case "S":
		*y -= 1
	case "W":
		*x -= 1
	default:
		log.Printf("Invalid direction: %v", direction)
		os.Exit(1)
	}
}
