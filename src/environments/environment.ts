// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
//   githubApi:"https://api.github.com/users/daneden?access_token=' + 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",
    githubApi: 'https://api.github.com',
  requestLimit: "https://api.github.com/rate_limit"}
//     const response = await fetch('https://api.github.com/repos/facebook/react/issues', {
//         headers: {
//             'Authorization': 'token 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',
//         }
//     })
//     return await response.json()
// }
// };
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
