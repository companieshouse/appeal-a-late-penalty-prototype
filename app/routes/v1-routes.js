const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// ******* Signin javascript ********************************
router.get('/v1/signin', function (req, res) {
  // Set URl
  res.render('v1/signin', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/signin', function (req, res) {
  // Create empty array and set error variables to false
  // var errors = []
  // var emailHasError = false
  // var passwordHasError = false

  // // Check if user has filled out a email
  // if (req.session.data['emailAddress'] === '') {
  //   // No value so add error to array
  //   emailHasError = true
  //   errors.push({
  //     text: 'Enter your email address',
  //     href: '#emailAddress'
  //   })
  // }

  // // Check if user has filled out a password
  // if (req.session.data['password'] === '') {
  //   // No value so add error to array
  //   passwordHasError = true
  //   errors.push({
  //     text: 'Enter your password',
  //     href: '#password'
  //   })
  // }

  // // Check if ether filed not filled out
  // if (emailHasError || passwordHasError) {
  //   // Re-show page with error value as true so errors will show
  //   res.render('v1/signin', {
  //     errorEmail: emailHasError,
  //     errorPassword: passwordHasError,
  //     errorList: errors
  //   })
  // } else {
  //   // User inputted value so move to next page
    res.redirect('/v1/penalty-reference')
  
})

// ******* penalty-reference javascript ********************************
router.get('/v1/penalty-reference', function (req, res) {
  // Set URl
  res.render('v1/penalty-reference', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/penalty-reference', function (req, res) {
  var companyNumber = req.session.data['companyNumber'].toUpperCase();


  if (companyNumber == '00000000' ) {
    res.redirect('/v1/select-the-penalty')
    } else {
      res.redirect('/v1/review-penalty')
    }

})

// ******* review-penalty javascript ********************************
router.get('/v1/review-penalty', function (req, res) {
  // Set URl
  res.render('v1/review-penalty', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/review-penalty', function (req, res) {
  res.redirect('/v1/choose-reason')
})

// ******* choose-reason javascript ********************************
router.get('/v1/choose-reason', function (req, res) {
  // Set URl
  res.render('v1/choose-reason', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/choose-reason', function (req, res) {

  if (req.session.data['appealReason'] === 'illness') {
    res.redirect('/v1/who-was-ill')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/other-reason-entry')
  }
})

// ******* who-was-ill javascript ********************************
router.get('/v1/who-was-ill', function (req, res) {
  // Set URl
  res.render('v1/who-was-ill', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/who-was-ill', function (req, res) {
  res.redirect('/v1/illness-start-date')
})

// ******* continued-illness javascript ********************************
router.get('/v1/continued-illness', function (req, res) {
  // Set URl
  res.render('v1/continued-illness', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/continued-illness', function (req, res) {

  if (req.session.data['continuedIllness'] === 'yes') {
    res.redirect('/v1/illness-information')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/illness-end-date')
  }
})

// ******* illness-start-date javascript ********************************
router.get('/v1/illness-start-date', function (req, res) {
  // Set URl
  res.render('v1/illness-start-date', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/illness-start-date', function (req, res) {
  res.redirect('/v1/continued-illness')
})

// ******* illness-end-date javascript ********************************
router.get('/v1/illness-end-date', function (req, res) {
  // Set URl
  res.render('v1/illness-end-date', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/illness-end-date', function (req, res) {
  res.redirect('/v1/illness-information')
})

// ******* illness-information javascript ********************************
router.get('/v1/illness-information', function (req, res) {
  // Set URl
  res.render('v1/illness-information', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/illness-information', function (req, res) {
  res.redirect('/v1/evidence')
})

// ******* evidence javascript ********************************
router.get('/v1/evidence', function (req, res) {
  // Set URl
  res.render('v1/evidence', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/evidence', function (req, res) {
  if (req.session.data['supportingEvidence'] === 'yes') {
    res.redirect('/v1/evidence-upload')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/check-your-answers')
  }
})

// ******* evidence-upload javascript ********************************
router.get('/v1/evidence-upload', function (req, res) {
  // Set URl
  res.render('v1/evidence-upload', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/evidence-upload', function (req, res) {
  res.redirect('/v1/check-your-answers')
})

// ******* check-your-answers javascript ********************************
router.get('/v1/check-your-answers', function (req, res) {
  // Set URl
  res.render('v1/check-your-answers', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/check-your-answers', function (req, res) {
  res.redirect('/v1/confirmation')
})

// ******* reason-other javascript ********************************
router.get('/v1/reason-other', function (req, res) {
  // Set URl
  res.render('v1/reason-other', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/reason-other', function (req, res) {
  res.redirect('/v1/other-start-date')
})

// ******* other-start-date javascript ********************************
router.get('/v1/other-start-date', function (req, res) {
  // Set URl
  res.render('v1/other-start-date', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/other-start-date', function (req, res) {
  res.redirect('/v1/continued-other')
})

// ******* continued-other javascript ********************************
router.get('/v1/continued-other', function (req, res) {
  // Set URl
  res.render('v1/continued-other', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/continued-other', function (req, res) {

  if (req.session.data['continuedOther'] === 'yes') {
    res.redirect('/v1/evidence')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/other-end-date')
  }
})

// ******* other-end-date javascript ********************************
router.get('/v1/other-end-date', function (req, res) {
  // Set URl
  res.render('v1/other-end-date', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/other-end-date', function (req, res) {
  res.redirect('/v1/evidence')
})

module.exports=router;

