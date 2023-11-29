package main

import (
    "fmt"
    "log"
    "net/http"

    "github.com/gorilla/mux"
    "github.com/rs/cors"
    "project/restaurants"
)

func main() {
    router := mux.NewRouter()

    router.HandleFunc("/restaurants", func(w http.ResponseWriter, r *http.Request) {
        restaurants.GetRestaurants(w, r)
    })

    handler := cors.Default().Handler(router)

    port := 8000
    fmt.Printf("Server is running on :%d...\n", port)
    log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), handler))
}
