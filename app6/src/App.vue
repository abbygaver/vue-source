<script>
    export default {
    
    }

</script>

<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/boo">
    </head>

    <h1>Forms</h1>
    <h2>Arbitrary Text</h2>

    <fieldset>
        <div class="col">
            <form class="col-md-6">
                <label>Text: <input class="form-control"></label>
            </form>
        </div>
        <div class="col">
            <form class="col-md-6" action="https://www.google.com/search" method="get">
                <label>Search: <input class="form-control" type=search></label><input class="btn btn-primary" type="submit" value="Search...">
            </form>
        </div>
        <div class="col"> 
            <form class="col-md-6">
                <label>TextArea: <textarea class="form-control"></textarea></label>
            </form>
        </div>
        
    </fieldset>

    <h2>Validated Text</h2>

    <fieldset>
        <form>
            <label>Email: <input class="form-control" type="email"></label>
            <label>Phone: <input class="form-control" type="tel"></label>
            <label>URL: <input class="form-control" type="url"></label>
            <label>Credit card number: <input class="form-control" name="cc" type="text" inputmode="numeric" pattern="[0-9]{8,19}" autocomplete="cc-number"></label>
        </form>
    </fieldset>

    <h2>Programmable Selection Controls</h2>

    <fieldset>
        <form>
            <legend> Pizza Size </legend>
            <p><label> <input type="radio" name="size"> Small </label></p>
            <p><label> <input type="radio" name="size"> Medium </label></p>
            <p><label> <input type="radio" name="size"> Large </label></p>

            <legend> Pizza Toppings </legend>
            <p><label> <input type="checkbox"> Bacon </label></p>
            <p><label> <input type="checkbox"> Extra Cheese </label></p>
            <p><label> <input type="checkbox"> Onion </label></p>
        </form>

        <form>
            <label for="flavors" class="form-label">Select a Flavor</label>
            <input list="flavor-list" id="flavors" class="form-control" name="flavor">
            <datalist id="flavor-list">
                <option value="Chocolate"></option>
                <option value="Caramel"></option>
            </datalist>

            <label for="state-select" class="form-label">State</label>
            <select id="state-select" class="form-select" name="states">
                <option value="MD">Maryland</option>
                <option value="WV">West Virginia</option>
            </select>
        </form>
    </fieldset>

    <h2>Pick Whatever</h2>

    <fieldset>
        <form>
            <label>Time: <input class="form-control" type="time" min="11:00" max="21:00" step="900"></label>
            <label>Date: <input class="form-control" type="date"></label>
            <label>Time AND Date: <input class="form-control" type="datetime-local"></label>
        </form>
    </fieldset>

    <input id="color" class="form-control form-control-color" type="color" name="color">

    <h2>Numeric Selection and Display Controls</h2>

    <fieldset>
        <form>
            <label class="form-control">            <input id="age-picker" class="form-control" type="number" name="age" min="18" max="22">Age</label>

            <label for="volume" class="form-label">Volume</label>
            <input id="volume" class="form-range" type="range" name="volume" min="0" max="10">

            <label for="download-progress" class="form-label">Downloading...</label>
            <progress id="download-progress" max="100" value="50"></progress>
            
            <label for="health" class="form-label">Health Bar</label>
            <meter id="health" min="0" max="100" low="25" high="75" optimum="100" value="50"></meter>
        </form>
    </fieldset>


    <h2>Buttons</h2>

    <fieldset>
        <form>
            <input id="submit" class="btn btn-outline-info m-3" type="submit" value="Submit">
            <input id="reset" class="btn btn-outline-info m-3" type="reset" value="Reset">
            <input id="logout" class="btn btn-outline-info m-3" type="button" value="Custom">
        </form>
    </fieldset>
    
    <h2>Hidden Input Controls</h2>

    <fieldset>
        <form>
            <label for="hidden-control" class="form-label">Hidden control:</label>
            <input id="hidden-control" class="form-control" type="hidden" value="I wanna dropout">
        </form>
        <button for="hidden-control" type="btn btn-outline-info m-3">Press</button>
    </fieldset>

</template>

<style>
    body{
        margin-left: 2em;
        margin-top:2em;
        margin-right:2em;
    }

    

</style>