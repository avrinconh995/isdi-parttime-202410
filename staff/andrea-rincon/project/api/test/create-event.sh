curl -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2UyZTg2NDViODViZGEwODhhOTg3ODYiLCJpYXQiOjE3NDMwMTE1NTF9.bG7mP7iWSudm71b-bNfNP364pTN0pwtXBtXW7CYlwC0" -H "Content-Type: application/json" -d '{
"children":["Alana", "Agatha"],
"title":"Clases de Natacion", 
"date":"2025-03-26T17:00:00Z",
 "description":"preguntar crecimiento"
}' http://localhost:8080/events -v