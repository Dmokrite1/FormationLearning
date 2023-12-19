//import http from 'http';
//import { parse } from 'querystring';
import * as http from 'http';
import { parse } from 'querystring';

const port = 8001;

const activities: any[] = [];
const users: any[] = [];

const server = http.createServer((req, res) => {
    
    const urlParts = req.url?.split('/');
    const resource = urlParts ? urlParts[1] : '';

    if (resource === 'activities' && req.method === 'POST') {
        createActivity(req, res);
    } else if (resource === 'activities' && req.method === 'GET') {
        getActivities(req, res);
    } else if (resource === 'activities' && req.method === 'PUT') {
        updateActivity(req, res);
    } else if (resource === 'activities' && req.method === 'DELETE') {
        deleteActivity(req, res);
    } else if (resource === 'users' && req.method === 'POST') {
        createUser(req, res);
    } else if (resource === 'users' && req.method === 'GET') {
        getUsers(req, res);
    } else if (resource === 'users' && req.method === 'PUT') {
        updateUser(req, res);
    } else if (resource === 'users' && req.method === 'DELETE') {
        deleteUser(req, res);
    } else if (resource === 'help' && req.method === 'GET') {
        help(req, res);
    }else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

function help(req: http.IncomingMessage, res: http.ServerResponse) {
    // Page HTML expliquant le fonctionnement de votre API
    const htmlContent = `
      <html>
        <head>
          <title>API Help</title>
        </head>
        <body>
            <h1>Welcome to the API Help Page</h1>
            <h3>This is a simple API with CRUD operations for activities and users.</h3>
            <h2>Activities:</h2>
            <h3>
            Create: POST http://localhost:8001/activities;
            Read: GET http://localhost:8001/activities;
            Update: PUT http://localhost:8001/activities/:id;
            Delete: DELETE http://localhost:8001/activities/:id;
            </h3>
            <h2>Users:</h2>
            <h3>
            Create: POST http://localhost:8001/users;
            Read: GET http://localhost:8001/users;
            Update: PUT http://localhost:8001/users/:id;
            Delete: DELETE http://localhost:8001/users/:id;
            </h3>
            <h2>Help:</h2>
            <h3>
            Help Page: GET http://localhost:8001/help;
            </h3>
        </body>
      </html>
    `;
  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
}

function createActivity(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
  
    req.on('end', () => {
      try {

        const activityData = JSON.parse(body);
  
        const newActivity = {
          id: Math.random().toString(), 
          name: activityData.name,
          description: activityData.description,
        };
  
        activities.push(newActivity);
  
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Activity created', data: newActivity }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid JSON format' }));
      }
    });
}

function getRecentActivities(userId: string): string[] {
  
    const userRecentActivities = new Map<string, string[]>();
    const recentActivities = userRecentActivities.get(userId) || [];
  
    return recentActivities;
}
  
function getActivities(req: http.IncomingMessage, res: http.ServerResponse) {
    // Logique pour proposer une activité le dimanche
    const userId = req.url?.split('?')[1]?.split('=')[1];
    if (userId) {
      const recentActivities = getRecentActivities(userId);
      const availableActivities = activities.filter(activity => !recentActivities.includes(activity.id));
  
      if (availableActivities.length > 0) {
        const randomActivity = availableActivities[Math.floor(Math.random() * availableActivities.length)];
  
        // Mettez à jour la carte des activités récentes de l'utilisateur
        const userRecentActivities = new Map<string, string[]>();
        const userActivities = userRecentActivities.get(userId) || [];
        userActivities.push(randomActivity.id);
        userRecentActivities.set(userId, userActivities);
  
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Proposed Sunday activity', data: randomActivity }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'No available activities for this user on Sunday' }));
      }
    } else {
      // Logique pour obtenir toutes les activités
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ activities: activities }));
    }
}
  
function updateActivity(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    const urlParts = req.url?.split('/');
    const activityId = urlParts ? urlParts[2] : '';
  
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
  
    req.on('end', () => {
      try {
        const updatedActivityData = JSON.parse(body);
  
        // Recherche de l'activité avec l'ID correspondant dans la liste fictive
        const index = activities.findIndex(activity => activity.id === activityId);
  
        if (index !== -1) {
          // Mise à jour des propriétés de l'activité
          activities[index].name = updatedActivityData.name || activities[index].name;
          activities[index].description = updatedActivityData.description || activities[index].description;
  
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Activity updated', data: activities[index] }));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Activity not found' }));
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid JSON format' }));
      }
    });
}

function deleteActivity(req: http.IncomingMessage, res: http.ServerResponse) {
    const urlParts = req.url?.split('/');
    const activityId = urlParts ? urlParts[2] : '';
  
    // Recherche de l'index de l'activité avec l'ID correspondant dans la liste fictive
    const index = activities.findIndex(activity => activity.id === activityId);
  
    if (index !== -1) {
      // Suppression de l'activité de la liste fictive
      const deletedActivity = activities.splice(index, 1)[0];
  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Activity deleted', data: deletedActivity }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Activity not found' }));
    }
}

function createUser(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
  
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
  
    req.on('end', () => {
      try {
        const userData = JSON.parse(body);
  
        // Exemple de logique pour créer un nouvel utilisateur dans une base de données fictive
        const newUser = {
          id: Math.random().toString(), // Un identifiant fictif
          username: userData.username,
          email: userData.email,
        };
  
        // Ajoutez le nouvel utilisateur à la liste fictive
        users.push(newUser);
  
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User created', data: newUser }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid JSON format' }));
      }
    });
}

function getUsers(req: http.IncomingMessage, res: http.ServerResponse) {


  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ users: users }));
}

function updateUser(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    const urlParts = req.url?.split('/');
    const userId = urlParts ? urlParts[2] : '';
  
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
  
    req.on('end', () => {
      try {
        const updatedUserData = JSON.parse(body);
  
        // Recherche de l'utilisateur avec l'ID correspondant dans la liste fictive
        const index = users.findIndex(user => user.id === userId);
  
        if (index !== -1) {
          // Mise à jour des propriétés de l'utilisateur
          users[index].username = updatedUserData.username || users[index].username;
          users[index].email = updatedUserData.email || users[index].email;
  
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'User updated', data: users[index] }));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'User not found' }));
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid JSON format' }));
      }
    });
  }

function deleteUser(req: http.IncomingMessage, res: http.ServerResponse) {
    const urlParts = req.url?.split('/');
    const userId = urlParts ? urlParts[2] : '';
  
    // Recherche de l'index de l'utilisateur avec l'ID correspondant dans la liste fictive
    const index = users.findIndex(user => user.id === userId);
  
    if (index !== -1) {
      // Suppression de l'utilisateur de la liste fictive
      const deletedUser = users.splice(index, 1)[0];
  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User deleted', data: deletedUser }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User not found' }));
    }
}

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
