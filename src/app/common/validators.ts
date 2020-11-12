import { FormControl } from '@angular/forms';

export function restrictedWordsValidator(restrictedWords: Array<string>) {
    return (control: FormControl) : {[key: string]: any} => {
        if (!restrictedWords) return null;

        var invalidWords = restrictedWords
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);

        return invalidWords && invalidWords.length > 0
            ?   {'restrictedWords': invalidWords.join(', ')}
            : null
    }
}
