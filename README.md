<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Descripcion 📝

Esta API tiene como objetivo el registro de pacientes para una clinica.

Las peticiones que se puede realizar son las siguiente:

```bash
# Tipo GET

📍 http://localhost:3001/v1/register-user
```

```bash
# Tipo GET con ID

📍 http://localhost:3001/v1/register-user/id
```

```bash
# Tipo POST

📍 http://localhost:3001/v1/register-user

#Con un Request tipo JSON
    {
      "IdNumber": "12340920465",
      "firstName": "Samir",
      "lastName": "Hadechni",
      "Email": "samir@gmail.com",
      "Phone": "+56977476787"
    }

```

```bash
# Tipo DELETE con ID

📍 http://localhost:3001/v1/register-user/id
```

```bash
# Tipo PATCH

📍 http://localhost:3001/v1/register-user/id

#Con un Request tipo JSON
   {
     "IdNumber": "12340920465",
     "firstName": "Samir",
     "lastName": "Hadechni",
     "Email": "samir@gmail.com",
     "Phone": "+56977476787"
   }

```

```bash
# Ruta para prueba mediante Swagger

📍 http://localhost:3001/documentation
```

```bash
# Ruta para observar DB pgadmin

📍 http://localhost:80

# Para ingresar

User:admin@admin.com
contraseña: admin

```
## Run Mediante Docker 🐳

```bash
 # La API se debe ejecutar el comando en la ruta API-CLINICA

$ docker-compose up -d

# Para rectificar que las imagenes esten en run

$ docker-compose ps

Existen 3 imagenes en el docker compose los cuales son 

📍 api-clinica --> Microservicio o Backend 
📍 postgres --> Base de datos 
📍 pgadmin --> Herramienta para visualizar DB
```

## Intalacion 📍

```bash
$ npm install
```

## Ejecutar la App ⬇️

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Autor

-  🧑🏻‍💻 Samir Hadechni - [Portafolio](https://samirjhb.github.io/PortaFolio.github.io/)
