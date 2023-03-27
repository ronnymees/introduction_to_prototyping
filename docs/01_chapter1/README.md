# Introduction

## History en evolution of the internet and the web

### 1950s

Networks did not really exist. Computers existed out of large mainframes with many terminals. Connections where in permanent use by a terminal. Connections could not be shared. This principle is called point-to-point communication.

![IMAGE](./images/image1.png)

### 1960-1970s

Some networks existed but where local implementations.

* ARPANET
* NPL
* Merit Network
* CYCLADES

Computers where very expensive at the time. It would be desirable to be able to use a computer that was on a remote location or on the other side of the country. The idea arose to connect these computers and mainframes to a large network. The cold war also emerged the idea that a computer network could survive a nuclear war. Permanent point-to-point connections where impossible or to expensive. A new technique needed to be used to make the networks possible.

A technique called **packet switching** was used to connect multiple networks over a single cable. Some protocols where invented that made use of packet switching to join the networks together.

![IMAGE](./images/image2.png)

In a packet switched network, all data is split into small packets. Each packet must be routed from destination to source. The time when no data is send, the line is available for use of other packets from other sources and destinations. In this way there is no more need of expensive and inefficient point-to-point connections.

### 1982: TCP/IP

TCP/IP is a set of protocols that make use of the packet switching principle. Although both protocols can be used separately. In almost any use case they come hand in hand.

#### TCP: Transmission Control Protocol

The TCP protocol enables for a reliable connection between to endpoints. It uses handshaking to confirm that data has reached the destination. If something would happen that prevents the data from reaching the destination, the protocol will be able to detect this.

TCP also introduces the principle of `ports`. Each computer can use up to 65536 to listen to. Each port could be a different application or service that is made available to the other systems in the network. For example HTTP uses port 80 and email uses port 25. Using this principle a single computer can have both an HTTP server and SMTP (mail) server up and running.

#### IP: Internet Protocol

The Internet Protocol enables reliable routing over a network. The IP protocol introduces the concept of an IP address. Each node on the network should have an `IP address` to allow communication between them. The IP protocol will ensure the right information reaches the right destination.

```url
192.168.1.1:80
```

The above combination of an IP address and a TCP port enables you to reach the computer on the network that has the IP address `192.168.1.1` and when it reaches the correct computer on the network it will pass the data to the TCP port `80` which is in normal cases an HTTP server.

* IP address: `192.168.1.1`
* TCP Port: `80`

### 1989: World Wide Web - www

Before 1989 networks where limited to military, universities and research. In 1989 it was decided to allow commercial activities on the internet. Now that all companies where allowed to make use of the `internet`, there was an increse of investments and thus an increase in bandwidth. This resulted in an explosive growth of users.

Until that time there was no uniform or standardized protocol to use the internet. Many protocol existed each with there own purpose and goal.

At CERN, Tim Berners-Lee tackled the problem of accessing information. He created technologies for sharing information. These technologies are still in use of today.

* HyperText Markup Language - HTML
* HyperText Transfer Protocol - HTTP
* Uniform Resource Locator - URL

![IMAGE](./images/image3.png)

You can still find the very first webpage that was created at that time at [http://info.cern.ch/](http://info.cern.ch/)

### HyperText Markup Language - HTML

HyperText Markup Language - HTML was a way to add context and meaning to otherwise meaningless pieces of text. Some text may function as a title, other text is a paragraph in a set of other paragraphs and so on.

### HyperText Transfer Protocol - HTTP

Now that we have a way to markup documents we still need to share them and access them. The HyperText Transfer Protocol - HTTP is a protocol that enables the exchange of HTML documents over a computer network. It is a set of agreements on how to access a document.

#### Uniform Resource Locator - URL

HTTP provides a mean to exchange documents, be there is still need of a system that allow us to point to that document. An URL solves this problem by defining a unique string of names separated by slash `/` characters to identify documents on other nodes on a network.

Example of an URL:

```url
http://www.vives.be/info/eo-ict.html
```

* `http://` defines the protocol to use when accessing the computer on the network
* `www.vives.be` will directly be translated by DNS to an IP address an thus points to a computer/server on the network
* `/info/eo-ict.html` is the path of the document that we want to request on the computer/server.

### 1993: Mosaic Browser

Until 1993 all 'browsing' on the internet was still done in a pure textual form. No graphical browsers existed at that time.

In 1993 the Mosaic browser was released to the public. It was the first user-friendly graphical browser. It was later renamed to Netscape.

The graphical way of browsing the internet led to an other explosive growth in internet economy. Surfing the internet was never more easy.

![IMAGE](./images/image4.png)

### 1997-2000: Dot-com bubble

The massive growth of the internet resulted in every company wanting to profit from the new technology. Suddenly everybody was able to access the internet, en thus every company wanted to be available through the internet.

To many financial investments and expectations resulted in an overgrowth, and many companies went in way to deep. This resulted in a collapse and decrease of thrust in the internet. This period is often remembered as *the dot com bubble*

![IMAGE](./images/image5.png)

### 2004: Web 2.0

By 2004 the internet was changing from an information retrieval platform to a more interactive environment. At the time browsing the internet was an activity of mainly viewing and downloading information.

A trend that was set by Google was that users of the internet could upload or post information back to the internet. This resulted in interactive websites. These websites where often called web 2.0, although there was never a new version of the internet released. The internet is a set of technologies and techniques.

Some examples of web 2.0 websites:

* social networking
* blogs
* wiki's
* video sharing
* web applications

![IMAGE](./images/image6.png)

### Internet of Things

The next (r)evolution in the internet is called the Internet of Things or IoT. The IoT tries to connect the world to the internet. Everyday devices and things will have access to data on the internet. This will enable to make these things smarter by exchanging information with each other.

All these smart devices generate a massive amount of data. A new challenge that has raised is the management of this data and extracting valuable information. This is called big-data.

## TCP/IP stack

When using the web, a couple of protocols are used to get everything working smoothly. Let's take a look at some of them.

### IP - Internet Protocol

The IP protocol is the principle protocol for the internet. It **relays** datagrams across network boundaries. Routing functionality enables internetworking, this is what establishes the internet.

The IP protocol enables delivery of packets form source to destination. It also defines packet structure that encapsulates the data.

The Internet Protocol Version 4 - IPv4 - is the dominant protocol of the internet. The 32bit addressing is reaching its limits, so a successor IPv6 - Internet Protocol Version 6 - is already standardized and in use. The migration from IPv4 to IPv6 will take many years to complete.

#### IPv4

IPv4 uses 32-bit (four-byte) addresses and is limited to 4294967296 (2^32) addresses. It uses a **quad-dotted** representation

![IMAGE](./images/image7.png)

#### IPv6

IPv6 is dealing with the long anticipated problem of the limited range of IPv4 addresses. It uses an 128-bit address. Instead of an decimal notation, it uses an hexadecimal notation.

![IMAGE](./images/image8.png)

::: tip 😄Fun fact
2^128 = 3.40 x 10^38 different ip addresses are possible with IPv6. On earth there are around 10^20 till 10^24 grains of sand. In the observable universe, there are around 10^24 stars. This means that every grain of sand or every star in the universe can have 100 trillion ip addresses...
:::

> Extra info: [Why Do We Need IP Adresses?](https://www.youtube.com/watch?v=iGPXkxeOfdk)

#### IP Routing

You want to visit facebook.com. The facebook.com server has the IP address `140.40.56.123` (got this address from the DNS server)

Source: `192.168.1.100`
Destination: `140.40.56.123`

![IMAGE](./images/image9.png)

Where can I find this server with IP: `140.40.56.123`??? Let’s ask the home router (`192.168.1.1`)

Nope, I don’t know where to find the IP `140.40.56.123`

I will ask Belgacom…

Note!!! NAT: Network Address Translation is used here to switch from a local network to the internet (source is changed to `82.83.46.52` instead of `192.168.1.100`) and visa versa when receiving the answer.

![IMAGE](./images/image10.png)

Belgacom do you know where to find `140.40.56.123`?

Nope, I only know where to find IP’s ranging from `82.0.0.0` to `82.255.255.255`

I will ask it to the local regstery (for Belgium)

![IMAGE](./images/image11.png)

Belgian registry does not know either so forwards the request to the European registry.

![IMAGE](./images/image12.png)

European registry does not know either and forwards the request to the Regional Internet Registry.

The Regional Internet Registry does not know either, but does now somebody that might know it and forwards the packet to the American Registry that is responsible for all IP addresses that are between `100.0.0.0` and `199.255.255.255`

![IMAGE](./images/image13.png)

The American Registry does not know either, but does now somebody that might know it and forwards the packet to the USA Registry that is responsible for all IP addresses that are between `140.0.0.0` and `149.255.255.255`.

![IMAGE](./images/image14.png)

The USA Registry does not know either, but does now somebody that might know it and forwards the packet to the AT&T.

AT&T knows where the server with IP `14.40.56.123` is and forwards the packet to the server.

![IMAGE](./images/image15.png)

With the `tracert` command you can test and take a look at the different routers that are between you and the server you want to connect to.

![IMAGE](./images/image16.png)

> Extra info: [IP Adresseses and the Internet](https://www.youtube.com/watch?v=L6bDA5FK6gs)

### TCP - Transmission Control Protocol

> The Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of data between applications running on hosts communicating over an IP network Source: wikipedia

#### TCP Handshake

To enable a reliable connection, a *7 way handshake* is used when creating a connection using TCP.

* Connect handshake: A 3 way handwhake to establisch a reliable connection.
* Disconnect handshake: A 4 way handshake to close the connection reliably.

##### Creating a network connection

![IMAGE](./images/image17.png)

1. The client sends a TCP-header with `SYN = 1`, a sequence number (to know the order of packets), source port and a destination port to the server.
2. If there is a server listening on the destination address and the given port, it will respond with `SYN = 1`, `ACK = 1` and an aknowledge number x + 1 to confirm the first TCP packet.
3. The client responds with a SYN = 0, ACK = 1 and an aknowledge number x + 1 together with the data needed to be send to the server.
After correctly following the 3 steps, the connection gets `ESTABLISHED`.

##### Closing a network connection

At any moment, the client or server can request to close the connection. This is again done using a handshake in order to get a reliable status about the connection.

![IMAGE](./images/image18.png)

1. The initiator sends a packet containing a `FIN` flag to the receiver.
2. The receiver sends an `ACK` flag back to the initiator.
3. The receiver then sends a `FIN` flag to the initiator to indicate that it is ready to close the connection.
4. The connection is then finnaly closed when the initiator sends back an `ACK` flag.

##### TCP ports

TCP also introduces the concept of ports. Port enable the protocol to distinguish between multiple types of packets that are received. This enables to isolate data between multiple applications on the server. A server can as wel host a HTTP server and a Mail server, just by listening to a different port on the same machine.

A port number is just a 16 bit number. This means that up to 65535 different applications can be hosted on a single machine, all isolated from each other.

The first 1024 port numbers are regulated to have a fixed type of service being hosted on them. Ports 1024 - 65535 can be used for anything you want.

Some of the most known ports are:

* `20`: FTP data transfer
* `21`: FTP control (command)
* `22`: Secure Shell (SSH)—used for secure logins, file transfers (scp, sftp) and port forwarding
* `23`: Telnet
* `25`: SMTP, used for email
* `80`: HTTP
* `443`: Hypertext Transfer Protocol over TLS/SSL (HTTPS)
* …

More ports: [Wikipedia](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)

### TCP/IP

The TCP protocol is almost always used with the IP protocol. Is commonly referred to the TCP/IP stack. A combination of an IP address with an TCP port looks like this `192.168.1.1:80`.

Applications that do not need reliable delivery of data can use UDP instead (User Datagram Protocol)

## The client/Server model

The internet is a large network of computers. Not all computers have the same task. Some are always available and serve information. Others are only temporally available and will access information from others. This model is called the client/server model.

> The client/server model is a computing model that acts as a distributed application which partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.Source: wikipedia

The client/server model is an asymmetric model. This means that not all participants (computers) in this model have the same task or responsibility. This is in contrast to the Peer-to-Peer or P2P model, where all participants have the same responsibility or task.

In the client/server model we have the servers that are always available. They only wait for requests and will never initiate communication. The clients are only temporary active and initiates the communication.

![IMAGE](./images/image19.png)

### Client / browser

* **Requester** of a resource
* **Temporary** available
* Can only send **requests**
* Cannot respond
* Processes responses and displays them to the user

### Server

* **Provider** of a resource
* **Permanently** available
* Can only send **responses**
* Cannot request
* Generate responses for a specific request

### Requests and responses

The client always initiates the request. For example:

* `give me the website www.vives.be`

The server always responds to the request of the client

* `Ok, here is the code for your request (www.vives.be)`
* `Sorry, I cannot find the code for your request`

![IMAGE](./images/image20.png)

## Web protocols

### HTTP Protocol

A Protocol is a **system of rules** that allow two or more entities of a communications system to transmit information.

HTTP stands for HyperText Transfer Protocol. HTTP is protocol that enables *Client-Server* applications. It defines how `requests` and `responds` should look and is standardized in the HTTP protocol coordinated by the IETF - Internet Engineering Task Force.

![IMAGE](./images/image21.png)

In the protocol it is defined how **clients** can send *requests* and how **servers** should *respond*. The protocol consists out of plain text and is readable for humans. This makes debugging and understanding the process easy.

HTTP is build on top of the TCP/IP stack. By default, port `80` is reserved for HTTP. This is the standard port that is used when no port is provided. Any other port could be used as well, but must always be supplied when sending out requests using a browser or other software.

The HTTP protocol is a **stateless** protocol. This means that no information is shared between different requests or responses. Each request-response sequence is isolated. This enables HTTP servers to process requests and responses very efficiently and easy.

If some state must be retained, for example a user that logs in, HTTP *cookies* can be used to create the concept of sessions.

#### Client request

The request message consists of the following:

* A request line: for example `GET /images/logo.png HTTP/1.1`, which requests a resource called `/images/logo.png` from the server
* One or more Request header fields (such as `Accept-Language: en`, …)
* An empty line to indicate the end of the header
* An optional message body

```http
GET / HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: www.vives.be
User-Agent: HTTPie/0.9.2
```

::: warning 🔥WARNING
The `Host` header is mandatory, all others are optional.
::: 

#### Server response

The response message consists of the following:

* A Status-Line which include the `status code` and `reason` message. For example `HTTP/1.1 200 OK` indicates that the client's request succeeded.
* Response header fields
    * such as `Content-Type: text/html`, …
* An empty line to indicate the end of the header
* An optional message body

```http
HTTP/1.1 200 OK
CF-RAY: 225c457079770300-LHR
Cache-Control: public, max-age=180
Connection: keep-alive
Content-Encoding: gzip
Content-Language: nl
Content-Type: text/html; charset=utf-8
Date: Mon, 14 Sep 2015 12:59:49 GMT
Etag: W/"1442235275-1"
Expires: Sun, 19 Nov 1978 05:00:00 GMT
Last-Modified: Mon, 14 Sep 2015 12:54:35 GMT
Server: cloudflare-nginx
Set-Cookie: __cfduid=d9cb1e5a7a171cd3e48723d5f9d669c721442235589; expires=Tue, 13-Sep-16 12:59:49 GMT; path=/; domain=.vives.be; HttpOnly
Transfer-Encoding: chunked
Vary: Cookie,Accept-Encoding
X-Drupal-Cache: HIT
X-Generator: Drupal 7 (http://drupal.org)
X-Powered-By: PHP/5.5.16

<html>….</html>
```

#### Try it yourself

1. Open chrome browser, and press F12 for the developer tools
2. Choose the ‘Network’ tab in the developer tools
3. Visit a website, eg: www.vives.be
4. Click on the initial request to view the details

![IMAGE](./images/image22.png)

### Getting documents over HTTP with clients and servers

1. The user types the URL in the browser (client)
2. The Browser translates the URL to a HTTP request
3. The browser sends the HTTP request to the server
4. The server generates a HTTP response containing the requested file
    1. Find the requested file
    2. Generate a HTTP response
    3. Add the requested file to the HTTP response
5. The server sends the HTTP response back to the client
6. The client processes the response and generates an output for the user

The user types the URL in the browser (client)

![IMAGE](./images/image23.png)

The Browser translates the URL to a HTTP request

![IMAGE](./images/image24.png)

The browser sends the HTTP request to the server

![IMAGE](./images/image25.png)

The server generates a HTTP response containing the requested file

![IMAGE](./images/image26.png)

The server sends the HTTP response back to the client

![IMAGE](./images/image27.png)

The client processes the response and generates an output for the user

![IMAGE](./images/image28.png)

> Extra info: [What Happens When You Click a Link?](https://www.youtube.com/watch?v=keo0dglCj7I)

### DNS - Domain Name System

> Domain Name System (DNS) is a hierarchical distributed naming system for computers, services, or any resource connected to the Internet Source: wikipedia

Translates domain names, which can be easily memorized by humans, to the numerical IP addresses needed for the purpose of computer services and devices worldwide
www.wikipedia.org --> 91.198.174.192

![IMAGE](./images/image29.png)

## IoT - Internet of Things

The Internet of Things (IoT) is the network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, actuators, and connectivity which enables these things to connect and exchange data, creating opportunities for more direct integration of the physical world into computer-based systems, resulting in efficiency improvements, economic benefits, and reduced human exertions.

The number of IoT devices increased 31% year-over-year to 8.4 billion in the year 2017 and it is estimated that there will be 30 billion devices by 2020. The global market value of IoT is projected to reach $7.1 trillion by 2020.

IoT involves extending *Internet connectivity beyond standard devices*, such as desktops, laptops, smartphones and tablets, to any range of traditionally dumb or non-internet-enabled physical devices and everyday objects. Embedded with technology, these devices can communicate and interact over the Internet, and they can be remotely monitored and controlled.

### IoT enables

Many technologies enable the IoT conept. This is a mix of existing technologies and newly rising technologies specific for IoT. Some examples are:

* Wireless technologies
    * 3G, 4G, 5G
    * Wifi
    * Bluetooth
    * LoRaWAN, Sigfox, NB-IoT
    * Zigbee, Z-Wave
* Communication protocols
    * MQTT
    * CoAP

**Overview of IoT enabling wireless technologies:**

![IMAGE](./images/image30.png)

