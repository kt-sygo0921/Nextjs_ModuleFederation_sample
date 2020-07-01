import Document, {Head, Main, NextScript} from 'next/document';


export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <script src="http://localhost:3002/remoteEntry.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}