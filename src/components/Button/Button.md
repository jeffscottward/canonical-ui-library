Default Button

```jsx
<Button>Default</Button>
```

Default Button w/ Image

```jsx
<Button>
  <Glyph type="glyph-report" size="small" />
  <span>Report</span>
</Button>
```

Primary Button

```jsx
<Button type="primary">Primary</Button>
```

Primary Button (w/ styleOverride)

\*
**Be sure to use**
**!important**
**to override styles** \*

```jsx
<Button
  type="primary"
  styleOverRideRule="override-x1"
  styleOverRide={`
    .override-x1 { 
      background: green !important;
    }
  `}
>
  Primary
</Button>
```

Warning Button

```jsx
<Button type="warning">Warning</Button>
```

Disabled Button

```jsx
<Button type="disabled">Disabled</Button>
```

Left Button

```jsx
<Button type="left" />
```

Right Button

```jsx
<Button type="right" />
```

Small Button

```jsx
<Button size="small">Small</Button>
```

Small Button Primary

```jsx
<Button type="primary" size="small">
  Small
</Button>
```

<!-- type, size, text, icon, iconPosition  -->
