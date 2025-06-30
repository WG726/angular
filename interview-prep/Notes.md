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
    - String Interpolation always transforms data into a string
        - This means you HAVE TO use Property Binding when setting a value to a non-string data value

EX:
```html
<button isDisabled={{ variable }}/>
<button [isDisabled]="variable">
```
** when variable = false, the top button is wrong because any string will just evaluate to true **

