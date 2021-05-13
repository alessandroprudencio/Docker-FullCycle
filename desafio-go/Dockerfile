FROM golang:1.16 AS builder
WORKDIR /go/src/app
COPY . ./
RUN go build -o hello .

FROM hello-world
WORKDIR /go/src/app
COPY --from=builder /go/src/app .

ENTRYPOINT ["/go/src/app/hello"]