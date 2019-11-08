import groovy.json.JsonSlurper
pipeline {
  agent any
  tools {nodejs "node"}
  try {
      nodeHelper()
      stages {
      stage('Checkout') {
        steps {
          gitVars = checkout scm
        }
      }
      stage('Install') {
        steps {
          sh 'yarn install'
        }
      }
      stage('Version') {
        steps {
          sh 'npm --version'
        }
      } 
  }
  } catch (e) { 
      jobSuccess = false
      throw e
  } finally {
        stage('Notify') {
            slackHelper(jobSuccess, gitVars, '#tluong')
        }
  }
}