// AP provided by https://poweropenapi.atlassian.net/atlassian-connect/all.js
// which is imported in index.html
// import AP from 'atlassian-connect'

// This is a hook. Will have editor instance
// It needs to be an async-function, to avoid dispatching an object to the reducer
export const loadMacro = () => (system) => {
  if (!AP || !AP.confluence) {
    console.log('Not running as a Confluence macro. Exiting without doing anything.')
    return
  }
  // Recover macro editor state
  // AP.confluence.getMacroData((macroParams) => {
  //   console.log('Confluence macroParams are', macroParams)
  //   if (macroParams && macroParams.spec && macroParams.spec !== "") {
  //     console.log('Loading spec', macroParams.spec)
  //     system.specActions.updateSpec(macroParams.spec)
  //   } else {
  //     system.specActions.updateSpec({})
  //   }
  // })

  AP.confluence.getMacroBody((body) => {
    console.log('Confluence body are', body)
    if (body) {
      system.specActions.updateSpec(body)
    } else {
      system.specActions.updateSpec("")
    }
  })

}
