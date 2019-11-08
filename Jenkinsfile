import groovy.json.JsonSlurper
pipeline {
  agent any
      stages {
      stage('Checkout') {
        steps {
          checkout scm
          echo "checkout scm"
        }
      }
      stage('Version') {
        steps {
          echo "Run Version stage"
        }
      } 
      }
}