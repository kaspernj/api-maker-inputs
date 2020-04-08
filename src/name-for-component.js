const inflection = require("inflection")

export default function ApiMakerNameForComponent(component) {
  if (component.props.name) {
    return component.props.name
  } else if (component.props.attribute && component.props.model) {
    return `${component.props.model.modelClassData().paramKey}[${inflection.underscore(component.props.attribute)}]`
  }
}
