import groovy.json.JsonSlurper
pipeline {
  agent any
      stages {
      stage('Checkout') {
        steps {
          checkout scm
        }
      }
      stage('Version') {
        steps {
          sh 'npm --version'
        }
      } 
      }
}