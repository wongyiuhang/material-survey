// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import range from "lodash/range"

import DropdownQuestion from "./"

storiesOf("DropdownQuestion", module)
  .add("Basic", () => (
    <DropdownQuestion
      question={{
        name: "dropdown-example",
        title: "What fruit(s) do you like?",
        type: "dropdown",
        defaultAnswer: "Apple",
        choices: [
          "Apple",
          "Banana",
          "Potato",
          "Cherry",
          "Pomegranate",
          "Orange",
          "Kiwi"
        ]
      }}
      onChangeAnswer={action("onChangeAnswer")}
    />
  ))
  .add("Basic Many Answers", () => (
    <DropdownQuestion
      question={{
        name: "dropdown-example",
        title: "What fruit(s) do you like?",
        type: "dropdown",
        choices: range(99).map(n => `Answer ${n}`)
      }}
      onChangeAnswer={action("onChangeAnswer")}
    />
  ))
  .add("Basic Multiple Dropdown", () => (
    <DropdownQuestion
      question={{
        name: "dropdown-example",
        title: "Search for an answer.",
        type: "multiple-dropdown",
        defaultAnswer: ["apple", "cherry"],
        choices: [
          { value: "apple", text: "Apple" },
          { value: "banana", text: "Banana" },
          { value: "potato", text: "Potato" },
          { value: "cherry", text: "Cherry" },
          { value: "pomegranate", text: "Pomegranate" },
          { value: "orange", text: "Orange" },
          { value: "kiwi", text: "Kiwi" }
        ]
      }}
      onChangeAnswer={action("onChangeAnswer")}
    />
  ))
