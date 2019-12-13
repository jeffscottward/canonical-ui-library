```jsx
<SelectDropDown
  name="SomeForm"
  options={[
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
  ]}
  handleChange={(selectedOption) => { console.log(selectedOption)} }
/>
```