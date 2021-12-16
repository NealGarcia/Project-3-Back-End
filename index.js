const app = express();

app.set('port', process.env.PORT || 8000)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(app.get('port'), () => {
    console.log(`Port: ${app.get('port')}`)
});