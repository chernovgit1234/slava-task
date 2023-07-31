
export function validateFeature(feature) {
    return isFeatureOptionsValid(feature)
}

export function validateAdvantage(advantage) {
    return isAdvantageOptionsValid(advantage)
}

function isFeatureOptionsValid({description, image, image_alt, model_name, sorting}) {
    return isNotEmptyString(description) && isNotEmptyString(image) && isNotEmptyString(image_alt) && isNotEmptyString(model_name) && isNumber(sorting)
}

function isAdvantageOptionsValid({img, title, text}) {
    return isNotEmptyString(img) && isNotEmptyString(title) && isNotEmptyString(text)
}

function isNotEmptyString(value) {
    return isString(value) && value.length > 0
}

function isNumber(value) {
    return typeof value === 'number'
}

function isString(value) {
    return typeof value === 'string'
}