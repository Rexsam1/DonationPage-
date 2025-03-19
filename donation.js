function copyAddress() {
    const walletAddress = "TJyGVYcxEGAFuhppuVcAiuvqVncSBmQC6c"; // Replace with your actual USDT address
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
}