import groovy.json.JsonSlurper

node ('docker') {
  try {
      noeHelper()
      stage('Checkout') {
        gitVars = checkout scm
      }
      stage('Install') {
        sh 'yarn install'
      }
      stage('Version') {
        sh 'npm --version'
      } 
  } catch { 
      jobSuccess = false
      throw e
  } finally {
        stage('Notify') {
            slackHelper(jobSuccess, gitVars, '#tluong')
  }
}