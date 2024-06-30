<?php 
declare(strict_types = 1);
namespace App\Utilities;

class HttpResponse
{
    private static function set(int $code, ?string $msg): void
    {
        $head = 'Content-Type: application/json';
        header($head, true, $code);
        $bodyMsg = $msg && $msg !== '' ? $msg : $msg;
        echo json_encode(['message'=> $bodyMsg]);
        exit;
    }

    public static function added(?string $msg = null): void
    {
        self::set(201, $msg);
    }

    public static function deleted(?string $msg = null): void
    {
        self::set(200, $msg);
    }

    public static function notAllowed(?string $msg = null): void
    {
        self::set(405, $msg);
    }

    public static function notFound(?string $msg = null): void
    {
        self::set(404, $msg);
    }

    public static function dbError(?string $msg = null): void
    {
        self::set(500, $msg);
    }
}
