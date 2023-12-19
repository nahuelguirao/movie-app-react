export function getCalificationBackground(calification) {
    if (calification >= 7) {
        return 'highRating';
    } else if (calification >= 5) {
        return 'mediumRating';
    } else {
        return 'lowRating';
    }
}