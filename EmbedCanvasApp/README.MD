# Embed Canvas App

You can use this code to embed a canvas app or canvas page into a Model Driven App form.

Example: ![canvas page in MDA form](PowerRobin/ModelDrivenAppCodeSamples/ressources/embedcanvas.png)

Link to Web Ressource: [Link](PowerRobin/ModelDrivenAppCodeSamples/EmbedCanvasApp/webressource.html)


## Requirements

* HTML web ressource where you copy & paste the code
* Model Driven App Form to display the web ressource (make sure to enable to pass the recod information as a parameter)
* additional table to store the URL to the canvas app
* if you use a Canvas Page you need share it via the Admin Center to give your users access to the page

## Limitations

* When using a canvas page you can't use the MDA specific `Navigate()` PowerFX functions to navigate to other places in your MDA
* you need to populate your URL-table in DEV / TEST / PROD manually (you could probably also use Environment Variables if you change the API call a bit)
* you need to manually refresh the page if you make changes outside your Canvas App in the MDA form
