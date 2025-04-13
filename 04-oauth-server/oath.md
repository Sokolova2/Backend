# OAuth 2.0 Тестування через Postman

## Authorization Code Flow

### Налаштування:
- Authorization:
    - OAuth 2.0 
    - Token Name: access token
    - Grant type: Authorization Code
    - Auth URL: http://localhost:8080/realms/karina/protocol/openid-connect/auth
    - Access Token URL: http://localhost:8080/realms/karina/protocol/openid-connect/token
    - Client ID: JS-CLIENT
    - Scope: openid
    - Get New Access Token

### Тестовий запит:

GET http://localhost:8080/realms/karina/protocol/openid-connect/userinfo

- Authorization:
    - OAuth 2.0 
    - Token: access token - use

### Відповідь:
---json
HTTP 200 OK
{
    "sub": "a4aadf6d-7a5b-48fd-a632-00087b16125d",
    "email_verified": true,
    "name": "Karina Sokolova",
    "preferred_username": "myuser",
    "given_name": "Karina",
    "family_name": "Sokolova",
    "email": "karinasokolova252@gmail.com"
}
 -----

 -----

## Implicit Flow

### Налаштування:
- Authorization:
    - OAuth 2.0 
    - Token Name: implicit token
    - Grant type: Implicit
    - Auth URL: http://localhost:8080/realms/karina/protocol/openid-connect/auth
    - Client ID: JS-CLIENT
    - Scope: openid
    - Get New Access Token

### Тестовий запит:

GET http://localhost:8080/realms/karina/protocol/openid-connect/userinfo

- Authorization:
    - OAuth 2.0 
    - Token: implicit token - use

### Відповідь:
---json
HTTP 200 OK
{
    "sub": "a4aadf6d-7a5b-48fd-a632-00087b16125d",
    "email_verified": true,
    "name": "Karina Sokolova",
    "preferred_username": "myuser",
    "given_name": "Karina",
    "family_name": "Sokolova",
    "email": "karinasokolova252@gmail.com"
}

## Password Credentials Flow

### Налаштування:
- Authorization:
    - OAuth 2.0 
    - Token Name: password token
    - Grant type: Password Credentials
    - Access Token URL: http://localhost:8080/realms/karina/protocol/openid-connect/token
    - Client ID: JS-CLIENT
    - Username: myuser
    - Password: 123456
    - Scope: openid
    - Get New Access Token

### Тестовий запит:

GET http://localhost:8080/realms/karina/protocol/openid-connect/userinfo

- Authorization:
    - OAuth 2.0 
    - Token: password token - use

### Відповідь:
---json
HTTP 200 OK
{
    "sub": "a4aadf6d-7a5b-48fd-a632-00087b16125d",
    "email_verified": true,
    "name": "Karina Sokolova",
    "preferred_username": "myuser",
    "given_name": "Karina",
    "family_name": "Sokolova",
    "email": "karinasokolova252@gmail.com"
}

## Client Credentials Flow

### Налаштування:
- Authorization:
    - OAuth 2.0 
    - Token Name: client token
    - Grant type: Client Credentials
    - Access Token URL: http://localhost:8080/realms/karina/protocol/openid-connect/token
    - Client ID: JS-CLIENT
    - Client Secret: wW769fpF5i1PAGv1ZpXTIBuEwXlFS4eR
    - Scope: openid
    - Get New Access Token

### Тестовий запит:

GET http://localhost:8080/realms/karina/protocol/openid-connect/userinfo

- Authorization:
    - OAuth 2.0 
    - Token: client token - use

### Відповідь:
---json
HTTP 200 OK
{
    "sub": "f406e73b-87c8-4fb5-baab-bf6a0c91afa5",
    "email_verified": false,
    "preferred_username": "service-account-js-client"
}

