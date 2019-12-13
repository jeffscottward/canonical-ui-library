Default banner:

```jsx
<Banner title="This is a Page Banner"/>
```

Alternate style banner
```jsx
<Banner title="This is a Page Banner" altStyle="true" secondayTitle="Secondary title"/>
```

Alternate style with call to action button
```jsx
<Banner
  title="This is a Page Banner"
  altStyle="true"
  secondayTitle="Secondary title"
  ctaBtnText="Call to Action"
  ctaBtnAction={()=>{alert('click')}}
  />
```