# @robin-drexler/react-if

React component to declaratively render react elements conditionally.

## Installation

### yarn

```
yarn add @robin-drexler/react-if
```

### npm

```
npm install @robin-drexler/react-if
```

## Usage

### Simple usage without else

If you do not have an else case, you can omit the `Then` component.

```js
import { If } from "@robin-drexler/react-if";

const App = () => (
  <div>
    <If condition={true}>
      <div>I am rendered :)</div>
    </If>
  </div>
);
```

### Usage with else

When there is an else case, you need to nest `Then` and `Else` inside the `If`

```js
import { If, Then, Else } from "@robin-drexler/react-if";

const App = () => (
  <div>
    <If condition={false}>
      <Then>
        <div>Then is rendered :)</div>
      </Then>
      <Else>
        <div>Else is rendered :)</div>
      </Else>
    </If>
  </div>
);
```