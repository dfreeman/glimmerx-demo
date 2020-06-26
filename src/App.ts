/* eslint-disable */
import Component, { hbs } from "@glimmerx/component";

import logo from "./logo.svg";
import "./App.css";

type GreetingArgs = {
  message: string;
  target?: string;
}

class Greeting extends Component<GreetingArgs> {
  private get target() {
    return this.args.target ?? 'glimmerx';
  }

  public static template = hbs`
    {{@message}}, {{this.target}}!
  `;
}

export default class App extends Component {
  private logo = logo;

  public static template = hbs`
    <div id="intro">
      <img src={{this.logo}}/>

      <h1>
        <Greeting @message="hello" @target="glint" />
      </h1>
      <h3>
        you can get started by editing <code>src/App.js</code>,
        and run tests by visiting <a href="./tests">/tests</a>
      </h3>
    </div>
  `;
}
