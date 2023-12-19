CREATE ACTIVITY

Invoke-RestMethod -Uri 'http://localhost:8001/activities' -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"name": "Jogging", "description": "A morning run in the park."}'

READ ACTIVITY

Invoke-RestMethod -Uri 'http://localhost:8001/activities' -Method GET

UPDATE ACTIVITY

Invoke-RestMethod -Uri 'http://localhost:8001/activities/{activityId}' -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"name": "Updated Activity", "description": "Updated description."}'

DELETE ACTIVITY

Invoke-RestMethod -Uri 'http://localhost:8001/activities/{activityId}' -Method DELETE

CREATE USER

Invoke-RestMethod -Uri 'http://localhost:8001/users' -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"username": "john_doe", "email": "john.doe@example.com"}'

READ USER

Invoke-RestMethod -Uri 'http://localhost:8001/users' -Method GET

UPDATE USER

Invoke-RestMethod -Uri 'http://localhost:8001/users/{userId}' -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"username": "new_username", "email": "new.email@example.com"}'

DELETE USER

Invoke-RestMethod -Uri 'http://localhost:8001/users/{userId}' -Method DELETE