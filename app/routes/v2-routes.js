const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// ******* Signin javascript ********************************
router.get('/v2/signin', function (req, res) {
  // Set URl
  res.render('v2/signin', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/signin', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var emailHasError = false
  var passwordHasError = false

  // Check if user has filled out a email
  if (req.session.data['emailAddress'] === '') {
    // No value so add error to array
    emailHasError = true
    errors.push({
      text: 'Enter your email address',
      href: '#emailAddress'
    })
  }

  // Check if user has filled out a password
  if (req.session.data['password'] === '') {
    // No value so add error to array
    passwordHasError = true
    errors.push({
      text: 'Enter your password',
      href: '#password'
    })
  }

  // Check if ether filed not filled out
  if (emailHasError || passwordHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/signin', {
      errorEmail: emailHasError,
      errorPassword: passwordHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/penalty-reference')
  }
})

// ******* penalty-reference javascript ********************************
router.get('/v2/penalty-reference', function (req, res) {
  // Set URl
  res.render('v2/penalty-reference', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/penalty-reference', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var companyNumError = false
  var refNumError = false
  var companyNumber = req.session.data['companyNumber'];

  // Check if user has filled out a email
  if (companyNumber === '') {
    // No value so add error to array
    companyNumError = true
    errors.push({
      text: 'You must enter a company number',
      href: '#companyNumber'
    })
  }

  // Check if user has filled out a password
  if (req.session.data['penaltyReference'] === '') {
    // No value so add error to array
    refNumError = true
    errors.push({
      text: 'You must enter a reference number',
      href: '#penaltyReference'
    })
  }

  // Check if ether filed not filled out
  if (companyNumError || refNumError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/penalty-reference', {
      errorCompany: companyNumError,
      errorRef: refNumError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    if (companyNumber == '00000000' ) {
      res.redirect('/v2/select-the-penalty')
      } else {
        res.redirect('/v2/review-penalty')
      }
  }
})

// ******* review-penalty javascript ********************************
router.get('/v2/review-penalty', function (req, res) {
  // Set URl
  res.render('v2/review-penalty', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/review-penalty', function (req, res) {
  res.redirect('/v2/choose-reason')
})

// ******* choose-reason javascript ********************************
router.get('/v2/choose-reason', function (req, res) {
  // Set URl
  res.render('v2/choose-reason', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/choose-reason', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['appealReason'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'You must select a reason',
      href: '#appealReason'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/choose-reason', {
      errorAppealReason: true,
      errorList: errors
    })
  } else {
        // User inputted value so move to next page
        if (req.session.data['appealReason'] === 'illness') {
          res.redirect('/v2/who-was-ill')
        } else {
          // User inputted value so move to next page
          res.redirect('/v2/other-reason-entry')
        }
  }
})

// ******* who-was-ill javascript ********************************
router.get('/v2/who-was-ill', function (req, res) {
  // Set URl
  res.render('v2/who-was-ill', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/who-was-ill', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['illPerson'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'You must select a person',
      href: '#illPerson'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/who-was-ill', {
      errorIllPerson: true,
      errorList: errors
    })
  } else {
    res.redirect('/v2/illness-start-date')
  }

})

// ******* continued-illness javascript ********************************
router.get('/v2/continued-illness', function (req, res) {
  // Set URl
  res.render('v2/continued-illness', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/continued-illness', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['continuedIllness'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'You must select if the person is still ill',
      href: '#continuedIllness'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/continued-illness', {
      errorContinuedIllness: true,
      errorList: errors
    })
  } else {
    if (req.session.data['continuedIllness'] === 'yes') {
      res.redirect('/v2/illness-information')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/illness-end-date')
    }
  }
})

// ******* illness-start-date javascript ********************************
router.get('/v2/illness-start-date', function (req, res) {
  // Set URl
  res.render('v2/illness-start-date', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/illness-start-date', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var dayHasError = false
  var monthHasError = false
  var yearHasError = false

  // Check if user has filled out a day
  if (req.session.data['illnessStart-day'] === '') {
    // No value so add error to array
    dayHasError = true
    errors.push({
      text: 'The date must include a day',
      href: '#illnessStart-day'
    })
  }

  // Check if user has filled out a month
  if (req.session.data['illnessStart-month'] === '') {
    // No value so add error to array
    monthHasError = true
    errors.push({
      text: 'The date must include a month',
      href: '#illnessStart-month'
    })
  }

  // Check if user has filled out a year
  if (req.session.data['illnessStart-year'] === '') {
    // No value so add error to array
    yearHasError = true
    errors.push({
      text: 'The date must include a year',
      href: '#illnessStart-year'
    })
  }

  // Check if ether filed not filled out
  if (dayHasError || monthHasError || yearHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/illness-start-date', {
      errorIllnessStartDay: dayHasError,
      errorIllnessStartMonth: monthHasError,
      errorIllnessStartYear: yearHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/continued-illness')
  }
})

// ******* illness-end-date javascript ********************************
router.get('/v2/illness-end-date', function (req, res) {
  // Set URl
  res.render('v2/illness-end-date', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/illness-end-date', function (req, res) {
// Create empty array and set error variables to false
var errors = []
var dayHasError = false
var monthHasError = false
var yearHasError = false

// Check if user has filled out a day
if (req.session.data['illnessEnd-day'] === '') {
  // No value so add error to array
  dayHasError = true
  errors.push({
    text: 'The date must include a day',
    href: '#illnessEnd-day'
  })
}

// Check if user has filled out a month
if (req.session.data['illnessEnd-month'] === '') {
  // No value so add error to array
  monthHasError = true
  errors.push({
    text: 'The date must include a month',
    href: '#illnessEnd-month'
  })
}

// Check if user has filled out a year
if (req.session.data['illnessEnd-year'] === '') {
  // No value so add error to array
  yearHasError = true
  errors.push({
    text: 'The date must include a year',
    href: '#illnessEnd-year'
  })
}

// Check if ether filed not filled out
if (dayHasError || monthHasError || yearHasError) {
  // Re-show page with error value as true so errors will show
  res.render('v2/illness-end-date', {
    errorIllnessEndDay: dayHasError,
    errorIllnessEndMonth: monthHasError,
    errorIllnessEndYear: yearHasError,
    errorList: errors
  })
} else {
  // User inputted value so move to next page
  res.redirect('/v2/illness-information')
}
})

// ******* illness-information javascript ********************************
router.get('/v2/illness-information', function (req, res) {
  // Set URl
  res.render('v2/illness-information', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/illness-information', function (req, res) {
  var errors = []
  var illnessInformationHasError = false

  if (req.session.data['illnessInformation'] === '') {
    illnessInformationHasError = true
    errors.push({
      text: 'Enter how this affected your ability to file on time?',
      href: '#illnessInformation'
    })
  }

  // Check if ether filed not filled out
  if ( illnessInformationHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/illness-information', {
      errorIllnessInformation: illnessInformationHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/name')
  }
})

// ******* name javascript ********************************
router.get('/v2/name', function (req, res) {
  // Set URl
  res.render('v2/name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/name', function (req, res) {
  var errors = []
  var nameHasError = false

  // Check if user has filled out a email
  if (req.session.data['name'] === '') {
    // No value so add error to array
    nameHasError = true
    errors.push({
      text: 'Enter your name',
      href: '#name'
    })
  }

  // Check if ether filed not filled out
  if (nameHasError ) {
    // Re-show page with error value as true so errors will show
    res.render('v2/name', {
      errorName: nameHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/relationship')
  }
})

// ******* name javascript ********************************
router.get('/v2/relationship', function (req, res) {
  // Set URl
  res.render('v2/relationship', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/relationship', function (req, res) {
  var errors = []
  var relationshipHasError = false

  // Check if user has filled out a email
  if (req.session.data['relationship'] === '') {
    // No value so add error to array
    relationshipHasError = true
    errors.push({
      text: 'Enter your relationship to the company',
      href: '#relationship'
    })
  }

  // Check if ether filed not filled out
  if (relationshipHasError ) {
    // Re-show page with error value as true so errors will show
    res.render('v2/relationship', {
      errorRelationship: relationshipHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/evidence')
  }
})

// ******* evidence javascript ********************************
router.get('/v2/evidence', function (req, res) {
  // Set URl
  res.render('v2/evidence', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/evidence', function (req, res) {

  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['supportingEvidence'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'You must select if you want to upload documents',
      href: '#supportingEvidence'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/evidence', {
      errorEvidence: true,
      errorList: errors
    })
  } else {
    if (req.session.data['supportingEvidence'] === 'yes') {
      res.redirect('/v2/evidence-upload')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/check-your-answers')
    }
  }
})

// ******* evidence-upload javascript ********************************
router.get('/v2/evidence-upload', function (req, res) {
  // Set URl
  res.render('v2/evidence-upload', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/evidence-upload', function (req, res) {
  res.redirect('/v2/check-your-answers')
})

// ******* check-your-answers javascript ********************************
router.get('/v2/check-your-answers', function (req, res) {
  // Set URl
  res.render('v2/check-your-answers', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/check-your-answers', function (req, res) {
  res.redirect('/v2/confirmation')
})

// ******* reason-other javascript ********************************
router.get('/v2/reason-other', function (req, res) {
  // Set URl
  res.render('v2/reason-other', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/reason-other', function (req, res) {
  var errors = []
  var shortTitleHasError = false
  var reasonHasError = false

  if (req.session.data['otherReason'] === '') {
    shortTitleHasError = true
    errors.push({
      text: 'Enter a short title for the reason',
      href: '#otherReason'
    })
  }

  if (req.session.data['detailedDescription'] === '') {
    reasonHasError = true
    errors.push({
      text: 'Enter a reason for appealing this penalty',
      href: '#detailedDescription'
    })
  }

  if (shortTitleHasError || reasonHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/reason-other', {
      errorShortTitle: shortTitleHasError,
      errorReason: reasonHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/other-start-date')
  }
})

// ******* other-start-date javascript ********************************
router.get('/v2/other-start-date', function (req, res) {
  // Set URl
  res.render('v2/other-start-date', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/other-start-date', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var dayHasError = false
  var monthHasError = false
  var yearHasError = false

  // Check if user has filled out a day
  if (req.session.data['otherStart-day'] === '') {
    // No value so add error to array
    dayHasError = true
    errors.push({
      text: 'The date must include a day',
      href: '#otherStart-day'
    })
  }

  // Check if user has filled out a month
  if (req.session.data['otherStart-month'] === '') {
    // No value so add error to array
    monthHasError = true
    errors.push({
      text: 'The date must include a month',
      href: '#otherStart-month'
    })
  }

  // Check if user has filled out a year
  if (req.session.data['otherStart-year'] === '') {
    // No value so add error to array
    yearHasError = true
    errors.push({
      text: 'The date must include a year',
      href: '#otherStart-year'
    })
  }

  // Check if ether filed not filled out
  if (dayHasError || monthHasError || yearHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/other-start-date', {
      errorOtherStartDay: dayHasError,
      errorOtherStartMonth: monthHasError,
      errorOtherStartYear: yearHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/continued-other')
  }

})

// ******* continued-other javascript ********************************
router.get('/v2/continued-other', function (req, res) {
  // Set URl
  res.render('v2/continued-other', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/continued-other', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['continuedOther'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'You must select if is still ongoing',
      href: '#continuedOther'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/continued-other', {
      errorContinuedOther: true,
      errorList: errors
    })
  } else {
    if (req.session.data['continuedOther'] === 'yes') {
      res.redirect('/v2/name')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/other-end-date')
    }
  }
})

// ******* other-end-date javascript ********************************
router.get('/v2/other-end-date', function (req, res) {
  // Set URl
  res.render('v2/other-end-date', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/other-end-date', function (req, res) {
  var errors = []
  var dayHasError = false
  var monthHasError = false
  var yearHasError = false

  // Check if user has filled out a day
  if (req.session.data['otherEnd-day'] === '') {
    // No value so add error to array
    dayHasError = true
    errors.push({
      text: 'The date must include a day',
      href: '#otherEnd-day'
    })
  }

  // Check if user has filled out a month
  if (req.session.data['otherEnd-month'] === '') {
    // No value so add error to array
    monthHasError = true
    errors.push({
      text: 'The date must include a month',
      href: '#otherEnd-month'
    })
  }

  // Check if user has filled out a year
  if (req.session.data['otherEnd-year'] === '') {
    // No value so add error to array
    yearHasError = true
    errors.push({
      text: 'The date must include a year',
      href: '#otherEnd-year'
    })
  }

  // Check if ether filed not filled out
  if (dayHasError || monthHasError || yearHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/other-end-date', {
      errorOtherEndDay: dayHasError,
      errorOtherEndMonth: monthHasError,
      errorOtherEndYear: yearHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/name')
  }
})

module.exports=router;

