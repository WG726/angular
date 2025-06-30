# Interview Prep
## String Interpolation Vs. Property Binding
- Similarities
    - Both are used to show data from TypeScript componenets in HTML

EX:
```html
<h3>{{ variable }}</h3>
<h3 [innerText]="variable">
```
- Differences
    - String Interpolation <u>**always**</u> transforms data into a string
        - This means you **HAVE TO** use *Property Binding* when setting a value to a non-string data value

EX:
```html
<button isDisabled={{ variable }}/>
<button [isDisabled]="variable">
```
** when variable = false, the top button is wrong because any string will just evaluate to true **

## Different Ways of Adding Bootstrap
### CDN Approach
In html we can add the bootstrap css from CDN server, just add the link in html

#### Advantages
- Very simple
- Cache-hit, Geographically close to the user
#### Disadvantages
- If CDN server is down, the entire application will collapse
- Also, new code may deploy to CDN so this a vulnerability in the application **(Not Secure)**

### NPM Approach 1
- Use command `npm install bootstrap`
- Afert this we can either mention it in our index.html file or styles.css or in angular.json

#### Index.html (not preferred)
Add this in header:
```html
<link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
```

#### Styles.css
Add this to top of styles.css:
```css
@import "~bootstrap/dist/css/bootstrap.min.css"
```

#### Angular.json (most preferred)
Add this to json:
```json
{
    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
    ]
}
```
Disadvantage
- Most of the components in bootstrap depend on JQuery and installing JQuery is not advisable in Angular because you want to avoid using libraries that use DOM manipulation, Angular itself should handle that.

### NPM Approach 2 (Popular Choice)
#### Use ng-bootstrap or ngx-boostrap
These packages implement the functionality in Angular way instead of JQuery.

- Use this command: `ng add @ng-bootstrap/ng-bootstrap`
