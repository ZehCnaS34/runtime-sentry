import axios from "axios";
import * as types from "@babel/types";
import * as traverse from "@babel/traverse";

type Babel = {
  types: typeof types
};

export default function(babel: Babel) {
  console.log(babel);
}
