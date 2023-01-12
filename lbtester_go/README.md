# lbtester_go (BETA)
#### Build 101 in 1min
```
1 - Setting Up and Running the Go Binary
Install
https://go.dev/doc/install

Run
go run main.go

2 - Creating a Go Module to Build a Go Binary
go mod init lbtester
go: creating new go.mod: module lbtester
go: to add module requirements and sums:
        go mod tidy

3 -  Building Go Binaries
go build

Optimize the binary size, you can omit the symbol table, debug information and the DWARF symbol table by passing -s and -w to the Go linker
go build -ldflags="-s -w" -o lbtester_go main.go

4- Run the binary
./lbtester

curl http://localhost:8888


5 - Add a module from the package
https://pkg.go.dev/github.com/yelinaung/eng-name


```
