<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="{{route('form.store')}}" method="post">
        @csrf
        <input type="text" name="category_name" id="">
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</body>
</html>