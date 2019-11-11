import groovy.json.JsonSlurper
pipeline {
  agent any 
  environment {
    LASTNAME = 'Luong'
    singlyQuoted = 'Hello'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
        echo "checkout scm"
      }
    }
    stage('Display name') {
      steps { 
        environment {
          doubleQuoted = "Tri"
        }
        echo "${singlyQuoted} ${doubleQuoted} ${LASTNAME}"
      }
    } 
  }
}