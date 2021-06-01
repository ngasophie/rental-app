<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="row">
        <div class="col-md-6">
            <form action="{{route('form.postUpload')}}" class="form-control" method="post">
                @csrf
                <input type="file" name="image" id="image" require>
                <button type="submit" class="btn btn-primary">Upload</button>
            </form>
        </div>
    </div>
</body>
</html>