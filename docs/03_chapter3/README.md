# Frontend scripting

## Communication 

Let's take a closer look at some of the communication protocols used in communication over the web.

### Uniform Resource Locator - URL

Uniform Resource Locators or short URLs are standardized names for internet resources. URLs point to pieces of information and tells two things about that piece of information.

* Telling where they are located
* How to interact with them

![image](./images/image1.png)

As you can see, a URL can exist out of several parts:

* **Scheme**: it tells the client how to access the resource. The URL says to use the HTTP protocol
* **Userinfo**: Login credentials user. For obvious reasons nog realy used.
* **Host**: is the server location, telling where the resource is hosted, in this case the host or server is called
* **Port**: on what TCP port to connect to on the host (server). This defaults to port 80 if omitted*
* **Resource path**: it tells what local resource on the server is being requested. 
* **Query**: queries can be used to filter down the resource. The query is prefixed by the ? character.
* **Fragment**: can be used to identify a single piece within the resource. The fragment is prefixed by the # character

#### Absolute versus relative URL

Web clients (browsers) understand a few shortcuts.
Relative URLs are a shorthand for specifying a resource within a resource URL’s can be absolute or relative.
* An absolute URL contains all the information to access a resource.
* A relative URL is incomplete. To get all the information it must interpret it relative to another URL, called the base.
Relative URLs are relative to the document in which it is found.

![image](./images/image2.png)

|Relative URL | Example  |
|- | - |
| Same folder | `reviews.html` |
| Child folder | `music/listings.html` |
| Grandchild folder | `movies/dvd/reviews.html` |
| Parent folder | `../index.html` |
| Grandparent folder | `../../index.html` |

### Hypertext Transfert Protocol - HTTP

HTTP is a protocol to access the data on the World Wide Web. It can be used to transfer the data in the form of text, audio, video, and so on and uses a MIME-like format.

#### Features

* **Connectionless protocol**: HTTP is a connectionless protocol. HTTP client initiates a request and waits for a response from the server. When the server receives the request, the server processes the request and sends back the response to the HTTP client after which the client disconnects the connection. The connection between client and server exist only during the current request and response time only.
* **Media independent**: HTTP protocol is a media independent as data can be sent as long as both the client and server know how to handle the data content. It is required for both the client and server to specify the content type in MIME-type header.
* **Stateless**: HTTP is a stateless protocol as both the client and server know each other only during the current request. Due to this nature of the protocol, both the client and server do not retain the information between various requests of the web pages.

#### Messages

**Request Message**: The request message is sent by the client that consists of a request line, headers, and sometimes a body.

![image](./images/image3.png) 

Frequently used HTTP Requests are GET, POST, DELETE.

**Response Message**: The response message is sent by the server to the client that consists of a status line, headers, and sometimes a body.

![image](./images/image4.png)

The server always sends a response status code:

* 1xx : Informational
* 2xx : Succes
* 3xx : Redirection
* 4xx : Client error
* 5xx : Server error

### Domain Name System - DNS

<!-- TODO : Overname cursus eigen cursus en cursus Sille -->
### JavaScript Object Notation - JSON

<!-- TODO : Overname cursus eigen cursus en cursus Sille -->
### Message Queuing Telemetry Transport - MQTT

<!-- TODO : Overname cursus eigen cursus en cursus Sille -->

## Frontend scripting with Javascript

<!-- TODO : Overname cursus eigen cursus -->

## Typescript

<!-- TODO : Nog aan te leren en uit te schrijven -->