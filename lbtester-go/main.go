package main

import (
    "fmt"
    "log"
    "net/http"
)

func homePage(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Welcome to the HomePage!")
	fmt.Println("Endpoint Hit: homePage")
}


func dashBoard(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Dashboard")
	fmt.Println("Dashboard endpoint")
}

func handleRequests() {
    http.HandleFunc("/", homePage)
    http.HandleFunc("/dashboard", dashBoard)
    log.Fatal(http.ListenAndServe(":8888", nil))
}

func main() {
    handleRequests()
}
