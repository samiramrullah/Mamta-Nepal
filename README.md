# Mamta-Nepal



# Backend
  1. morgan
    * The line app.use(morgan('dev')) initializes Morgan middleware and sets it to log all HTTP requests in the "dev" format. 
      eg: GET /api/users 200 12.345 ms - 42
  2. Body-Parser
    * In the body-parser middleware, the extended option allows to choose between parsing the URL-encoded data with the querystring library (when set to false) or the qs library (when set to true).
    When extended is set to false (default), the URL-encoded data is parsed with the querystring library which only supports simple key-value pairs and can't parse nested objects. On the other hand, when extended is set to true, the URL-encoded data is parsed with the qs library which can parse nested objects and supports more advanced features.

       * For example, 
         request: name=John&age=30

       when extended is set to false, the following URL-encoded data:
       { name: 'John', age: '30' }
       
       However, when extended is set to true, the same URL-encoded data can be parsed into the following object:

       { name: 'John', age: 30 }

       ***********************************

  # Frontend
  ## Technologies Used
    * TypeScript
    * React JS
    * Tailwind Css
    * Material Ui
  

# Backend
## Technologies Used
   * Node js
   * Express
   * Mogodb (Mongo cloud)
   * Mongoose
  # User management
    1. register
      * name
      * email (unique)
      * password (at least 8 character, at least a special character, at least a capital letter)

    2. Login 
      * email
      * password



## gaurav.verma@nagarro.com