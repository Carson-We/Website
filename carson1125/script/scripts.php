<?php

# Carson Account

function generateUserID($existingData)
{
    $existingIDs = array_column($existingData, 'UserID');

    $availableIDs = [];
    $alphabet = range('A', 'Z');
    $digits = range(0, 9);

    $totalPossibilities = count($alphabet) * count($alphabet) * count($digits) * count($digits);

    while (true) {
        $randomID = '';
        for ($i = 0; $i < 4; $i++) {
            $randomID .= $alphabet[array_rand($alphabet)] . $digits[array_rand($digits)];
        }

        if (!in_array($randomID, $existingIDs)) {
            return $randomID;
        }

        if (count($availableIDs) == $totalPossibilities) {
            return "All IDs are taken!";
        }
    }
}

function generateClientID()
{
    return bin2hex(random_bytes(16));
}

function hashPassword($password)
{
    return ['hashedPassword' => hash('sha256', $password)];
}

function registerUser($data)
{
    $latestUserData = file_get_contents('userData.json');
    $existingData = json_decode($latestUserData, true);

    $userID = generateUserID($existingData);
    $clientID = generateClientID();

    if (checkUsernameAvailability($data['username'], $existingData)) {
        return "Username already exists. Please choose a different username.";
    }

    $newUserData = [
        'name' => $data['name'],
        'username' => $data['username'],
        'email' => $data['email'],
        'phone' => $data['phone'],
        'password' => hashPassword($data['password']),
        'firstName' => $data['firstName'],
        'lastName' => $data['lastName'],
        'UserID' => $userID,
        'ClientID' => $clientID,
        'AccountType' => $data['account-class'],
        'dateDropdowns' => $data['dateDropdowns'],
        'country' => $data['country'],
        'phoneCountry' => $data['phoneCountry'],
        'gender' => $data['gender'],
        'agreeTerms' => $data['agreeTerms'],
        'receiveNews' => $data['receiveNews']
    ];

    $existingData[] = $newUserData;
    file_put_contents('userData.json', json_encode($existingData));

    return "Registration successful";
}

function checkUsernameAvailability($usernameToCheck, $existingData)
{
    return in_array($usernameToCheck, array_column($existingData, 'username'));
}

function loginUser($data)
{
    $latestUserData = file_get_contents('userData.json');
    $existingData = json_decode($latestUserData, true);

    $username = $data['username'];
    $password = $data['password'];

    foreach ($existingData as $userData) {
        if ($userData['username'] === $username && $userData['password']['hashedPassword'] === hash('sha256', $password . $userData['password']['salt'])) {
            return "Login successful";
        }
    }

    return "Invalid username or password. Please try again.";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['login'])) {
        echo loginUser($data);
    } else {
        echo registerUser($data);
    }
}

function updateUserData($data)
{
    $latestUserData = file_get_contents('userData.json');
    $existingData = json_decode($latestUserData, true);

    $username = $data['username'];

    $foundUserKey = null;

    foreach ($existingData as $key => $userData) {
        if ($userData['username'] === $username) {
            $foundUserKey = $key;
            break;
        }
    }

    if ($foundUserKey !== null) {
        $existingData[$foundUserKey]['name'] = $data['name'];
        $existingData[$foundUserKey]['email'] = $data['email'];
        $existingData[$foundUserKey]['phone'] = $data['phone'];
        $existingData[$foundUserKey]['firstName'] = $data['firstName'];
        $existingData[$foundUserKey]['lastName'] = $data['lastName'];
        $existingData[$foundUserKey]['dateDropdowns'] = $data['dateDropdowns'];
        $existingData[$foundUserKey]['country'] = $data['country'];
        $existingData[$foundUserKey]['phoneCountry'] = $data['phoneCountry'];
        $existingData[$foundUserKey]['gender'] = $data['gender'];
        $existingData[$foundUserKey]['confirmPassword'] = $data['confirmPassword'];
        $existingData[$foundUserKey]['agreeTerms'] = $data['agreeTerms'];
        $existingData[$foundUserKey]['receiveNews'] = $data['receiveNews'];

        file_put_contents('userData.json', json_encode($existingData));

        return "User data updated successfully";
    } else {
        return "User not found for updating";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['login'])) {
        echo loginUser($data);
    } elseif (isset($data['update'])) {
        echo updateUserData($data);
    } else {
        echo registerUser($data);
    }
}
?>