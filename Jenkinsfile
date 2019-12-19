node {
    def app
    def buildname = 'b' + env.BUILD_NUMBER

    stage('Get Code') {
        checkout scm
    }

    stage('Build Image') {
        app = docker.build("kristianwindsor/passgen.site")
    }

    stage('Push Image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push(buildname)
            app.push("latest")
        }
    }
    stage('Deploy') {
        sh """
            sed -i "s/passgen.site.*/passgen.site:$buildname/" deployment.yaml
            kubectl apply -f deployment.yaml
        """
    }
}