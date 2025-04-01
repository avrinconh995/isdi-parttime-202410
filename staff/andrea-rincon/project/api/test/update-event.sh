curl -X PATCH -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2UyZTg2NDViODViZGEwODhhOTg3ODYiLCJpYXQiOjE3NDM1MjMwNDl9.ly6gRhSUBHlj10iJcqjzlfchNRK_Jm53igZmWXJOIok" -H "Content-Type: application/json" -d '{
"title":"Clases de Natacion prueba test", 
"children":["Alana", "Agatha"],
"date":"2025-03-29T11:00:00Z",
 "description":"prueba test"
}' http://localhost:8080/events/67e6e6b635b8e4ea128747e6 -v