const capitalise = name => {
  return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

module.exports = { capitalise };
