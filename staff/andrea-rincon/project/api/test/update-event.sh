curl -X PATCH -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2UyZTg2NDViODViZGEwODhhOTg3ODYiLCJpYXQiOjE3NDMyNDU2MTN9.P-9LsZq95eFCYfRAhREKmADDUoHateKjZl2a8MKOql0" -H "Content-Type: application/json" -d '{
"title":"Clases de Natacion prueba test", 
"children":["67e6e62335b8e4ea128747d8", "67e6e6b635b8e4ea128747e4"],
"date":"2025-03-29T11:00:00Z",
 "description":"prueba test"
}' http://localhost:8080/events/67e6e6b635b8e4ea128747e6 -v